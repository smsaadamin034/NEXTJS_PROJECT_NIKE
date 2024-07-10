import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md">SignUp for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>

      <div className="border border-slate-gray flex justify-between items-center p-2 rounded-full w-[40%] max-lg:w-full max-lg:border-none max-lg:flex-col">      
        <input type="input" placeholder="subscribe@nike.com" className="outline-none px-2 mx-2 max-lg:w-full max-lg:border-slate-gray max-lg:border max-lg:rounded-full max-lg:p-3" />
        <div className="flex max-lg:w-full max-lg:flex-col max-lg:mt-2">
        <Button label="Sign Up" />
        </div>
        
      </div>
    </section>
  )
}

export default Subscribe;