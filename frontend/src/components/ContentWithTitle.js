const ContentWithTitle = ({ title, content }) => {
    return (
        !!content && (
            <div className="pt-3">
                <h4>{title}</h4>
                {content}
            </div>
        )
    );
}

export default ContentWithTitle;