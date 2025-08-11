interface SpinnerProps {
    caption: string;
}

export default function Spinner(props: SpinnerProps) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <svg 
                className="spin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
                    fill="#FFFFFF"
                />
                <path
                    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                    fill="#FFFFFF"
                />
            </svg>
            <span className='text-xl uppercase'>{ props.caption }</span>
        </div>
    )
}