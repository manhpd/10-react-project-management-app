export function Input({label, isRichText = false, ...props} : {label: string, isRichText?: boolean}) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-noen focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isRichText ? <textarea className={classes}
             {...props} ></textarea> : <input {...props} className={classes}/>}
        </p>
    );
}