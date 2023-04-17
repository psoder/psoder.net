export const Section = (props: { title: string; id: string; children: React.ReactNode }) => {
    return (
        <section id={props.id} className="grid gap-6 text-lg max-w-[80ch]">
            <h1 className="text-5xl font-black">{props.title}</h1>
            {props.children}
        </section>
    );
};
