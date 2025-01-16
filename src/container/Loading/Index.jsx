
import { StyleLoading } from "./Style"; 

const Loading = () => {
    return (
        <StyleLoading>
            <div className="loading-screen">
                <div className="spinner"></div>
                <p>Carregando...</p>
            </div>
        </StyleLoading>
    )
};

export default Loading;
