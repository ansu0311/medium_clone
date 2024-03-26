import { Quote } from "../components/Quote";
import { SignInComponent } from "../components/Signin";

export  function Signin() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 dark:bg-slate-900">
      <SignInComponent/>
      <div className="invisible md:visible"><Quote/></div>
      </div>
  )
}
