export default function FooterText() {
    return (
        <section className="block relative justify-center items-end" aria-hidden="true">
            <div className="pointer-events-none relative left-1/2 z-0 -translate-x-1/2 text-center text-[calc(100vw/5)] font-bold leading-[0.7] before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['FieldFlow'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['FieldFlow'] after:[text-shadow:0_1px_0_white]"></div>
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" aria-hidden="true">
                <div className="h-[20vw] w-[20vw] rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
            </div>
        </section>
    );
}
