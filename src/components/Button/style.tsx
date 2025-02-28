import { IButtonAddPokemon } from '../../interfaces/components'
import styled from 'styled-components'

export const Button = styled.button<IButtonAddPokemon>`
    max-width: 253px;
    height: 42px;
    color: ${(props: IButtonAddPokemon) => props.$addPokemon ? '#1D1D1D' : '#FFFFFF'};
    background-color: ${(props: IButtonAddPokemon) => props.$addPokemon ? 'transparent' : '#E40F0F'};
    border: ${(props: IButtonAddPokemon) => props.$addPokemon ? 'solid 1px #1D1D1D' : 'transparent'};
    border-radius: 30px;
    font-size: var(--description-size-14);
    font-weight: var(--weight-bold);
    cursor: pointer;
    padding: 0px 5px;
`