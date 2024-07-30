export default function JsonEntryComponent({ name, value, type, callback } : { name: string, value: any, type: 'string' | 'boolean' | 'number', callback: (value : any) => void}) {
    return (
        <div className={"py-1"}>
            <p className={"inline"}>{name}</p> =
            <input className={"inline ml-2"} placeholder={`Enter a ${type}`} onChange={(e) => callback(e.currentTarget.value)} defaultValue={value}/>
        </div>
        )
}