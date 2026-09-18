function LoadingSpinner() {
    return (
        <div className="relative h-8 w-8">
            {Array.from({ length: 12 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute left-1/2 top-1/2 h-2 w-0.5 rounded-full bg-gray-400"
                    style={{
                        transform: `rotate(${i * 30}deg) translate(0, -140%)`,
                        animation: "spinner-fade 1.2s linear infinite",
                        animationDelay: `${i * (1.2 / 12)}s`
                    }}
                />
            ))}
        </div>
    );
}

export default LoadingSpinner;