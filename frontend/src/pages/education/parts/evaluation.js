const Evalutation = ({title, data}) =>{
    const { text, legend } = data || {};
    const imageSrc = `${process.env.PUBLIC_URL}/evaluation_formula.png`
    return (
        <div className="pt-3">
            <h4>{title}</h4>
            <div>
                {text}
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={imageSrc} width={256}  />
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: legend }} />
            </div>
        </div>
    );
}

export default Evalutation;