const ListWithTitle = ({ title, list }) => {
    return (
        !!list && (
            <div className="pt-3">
                <h4>{title}</h4>
                
                    {list.map(item => (<p>{item}</p>))}
                
            </div>
        )
    );
}

export default ListWithTitle;