const ListWithTitle = ({ title, list }) => {
    return (
        !!list && (
            <div className="pt-3">
                <h4>{title}</h4>
                <ul>
                    {list.map(item => (<li>{item?.key} - {item?.value}</li>))}
                </ul>
            </div>
        )
    );
}

export default ListWithTitle;