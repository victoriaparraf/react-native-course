
    type FormInputs = {
    email: string;
    password: string;
    };

    export const FormsPage = () => {
    const { register, handleSubmit } = useForm<FormInputs>({
        defaultValues: {
        email: 'fernando@google.com',
        password: '123456',
        },
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>

        <div className="flex flex-col space-y-2 w-125">
            <input
            type="email"
            placeholder="email"
            className="border border-gray-300 p-2 rounded-xl"
            {...register('email', { required: true })}
            />

            <input
            type="password"
            placeholder="password"
            className="border border-gray-300 p-2 rounded-xl"
            {...register('password', { required: true })}
            />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">
            Ingresar
            </button>
        </div>
        </form>
    );
};

function useForm<T>(_arg0: { defaultValues: T }): { register: any; handleSubmit: any; } {
    throw new Error("Function not implemented.");
}
