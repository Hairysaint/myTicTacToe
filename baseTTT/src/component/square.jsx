

export default function Square( {value, sqFunc} ) {
    return (
        <div 
            className={`h-full w-full border-2 border-lime-500 flex items-center justify-center text-6xl`}
            onClick={sqFunc}
        >
            {value}
        </div>
    ) 
}