import estilos from "./loading.module.css"

function Loading (){
    return (
        <div className={estilos.loadingContainer}>
            <div className={estilos.loader}>
                <div></div>
            </div>
        </div>
    )
}




export default Loading