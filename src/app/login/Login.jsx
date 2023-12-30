import {Layout} from "../../components/Layout.jsx";

const logoSrc = "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600";

const Header = ({logoSrc, title}) => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src={logoSrc} alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {title}
            </h2>
        </div>
    );
};

const InputFieldEmail = ({id, type, autoComplete, label}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={id}
                    type={type}
                    autoComplete={autoComplete}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

const InputFieldPassword = ({id, type, autoComplete, label}) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                </div>
            </div>
            <div className="mt-2">
                <input
                    id={id}
                    name={id}
                    type={type}
                    autoComplete={autoComplete}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

const SubmitButton = ({type, text}) => {
    return (
        <div>
            <button type={type} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {text}
            </button>
        </div>
    );
};

export const LogIn = () => {
    return (
        <Layout>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
                <Header logoSrc={logoSrc} title="Sign in to your account"/>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" data-netlify="true">
                        <InputFieldEmail id="email" type="email" autoComplete="email" label="Email address"/>
                        <InputFieldPassword id="password" type="password" autoComplete="current-password" label="Password"/>
                        <SubmitButton type="button" text="Sign in"/>
                    </form>
                </div>
            </div>
        </Layout>
    );
};