type paginationProps = {
    pageNumber:number   
    paginate:any
}
const PaginationCompo = (props:paginationProps) => {
    const pages:any = []
    for(let i=1;i<=props.pageNumber;i++){
        pages.push(i)
    }
    return (
        <nav aria-label="Page navigation example" style={{display:'flex',flexWrap:'wrap'}}>
            <ul className="pagination" style={{display:'flex',paddingLeft:'0',listStyle:'none',flexWrap:'wrap',justifyContent:'center'}}>
                {pages.map((ele:number)=>{
                    return <li key={Math.random()} className="page-item"><button style={{borderRadius:'20px'}} onClick={()=>props.paginate(ele)} className="page-link">{ele}</button></li> 
                })}
            </ul>
        </nav>
    )
}
export default PaginationCompo
