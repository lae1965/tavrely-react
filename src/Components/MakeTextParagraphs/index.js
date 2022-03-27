export const MakeTextParagrath = ({render, paragraphsArray}) => {
    return (
        <>
            {paragraphsArray.map((paragraph, i) => (
                <p className={`rules__text ${paragraph.className}`} key={i}>
                    {!!render && render(i)}
                    {paragraph.text}
                </p>    
            ))}
        </>
    )
}