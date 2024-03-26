import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { existBlogSchema, newBlogSchema } from "ansuman_medium_schema";

export const blogRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECERT: string;
    },
    Variables: {
        userId: string;
    }
}>()

blogRoute.use(async(c,next)=>{
    const authToken:string = c.req.header('Authorization') || "";

    if(authToken === ""){
        c.status(403);
        return c.json({
            message:"Unauthorized"
        });
    }
    try{
        const token = authToken.split(" ")[1]
    
    const decodedPayload = await verify(token, c.env.JWT_SECERT)
    c.set('userId', decodedPayload.id);
    await next()
    }
    catch(error:any){
        c.status(403);
        return c.json({
            message:"Unauthorized",
            error: error.name
        });
    }


})

blogRoute.post('/',async (c)=>{
    const userId = c.get('userId')
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

    const {success} = newBlogSchema.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message:"Incorrect/Missing Inputs"
        });
    }

	const post = await prisma.post.create({
		data: {
			title: body.title,
			description: body.description,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
})

blogRoute.put('/',async (c)=>{
    const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();

    
    const {success} = existBlogSchema.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message:"Incorrect/Missing Inputs"
        });
    }

    const today = new Date();
	const updated = await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			description: body.description,
            dateCreated : today
		}
	});

	return c.json({
        id: updated.id,
        message: "Post updated successfully"
    });
})

blogRoute.get('/bulk',async (c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({
        select :{
            id:true,
            title:true,
            description:true,
            dateCreated:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

	return c.json(posts);
})

blogRoute.get('/:id',async (c)=>{
    try{
        const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id:id,
		},
        select:{
            authorId:true,
            title:true,
            description:true,
            dateCreated:true,
            author:{
                select:{
                    name:true,
                    quote:true,
                }
            }
        }
	});

	return c.json(post);
    }
    catch(error:any){
        c.status(411);
        return c.json({
            message:"Incorrect/Missing Inputs",
            error:  error.name
        });
    }
    })