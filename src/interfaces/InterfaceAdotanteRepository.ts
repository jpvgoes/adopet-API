import { AdotanteEntity } from "../entities/AdotanteEntity";
import { EnderecoEntity } from "../entities/EnderecoEntity";

export default interface InterfaceAdotanteRepository {
    criaAdotante(adotante: AdotanteEntity): Promise<AdotanteEntity>;

    listaAdotantes(): Promise<AdotanteEntity[]>;

    atualizaAdotante(
        id: number,
        adotante: AdotanteEntity
    ): Promise<{ success: boolean; message?: string }>;

    deletaAdotante(id: number): Promise<{ success: boolean; message?: string }>;

    atualizaEnderecoAdotante(
        idAdotante: number,
        endereco: EnderecoEntity
    ): Promise<{ success: boolean; message?: string }>;
}
