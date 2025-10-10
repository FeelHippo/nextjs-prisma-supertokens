import AuthenticationForm from "@/app/components/authentication_form"
export default function Page() {
    return <div
        className="absolute right-0 top-0 w-full md:w-1/2 h-full flex flex-col items-start bg-white rounded-s-2xl px-16 py-32">
        <div className="font-sans font-bold text-black text-6xl">Sign Up</div>
        <div className="bg-linear-to-r/increasing from-indigo-500 to-teal-400 w-60 h-1 mt-1"></div>
        <AuthenticationForm />
    </div>
}