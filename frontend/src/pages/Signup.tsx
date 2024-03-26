import { Quote } from "../components/Quote";
import { SignUpComponent } from "../components/Signup";

export  function Signup() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 dark:bg-slate-900">
      <SignUpComponent/>
      <div className="invisible md:visible"><Quote/></div>
      </div>
  )
}
