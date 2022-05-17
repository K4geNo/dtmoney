import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: white;
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: rgb(32, 32, 36);
            font-weight: 400;
            color: white;
            border-radius: 0.25rem;

            &:first-child {
                color: white;
            }

            &.deposit {
                color: green;
            }

            &.withdraw {
                color: red;
            }

            button {
                background: none;
                border: none;
                color: white;
            }
        }
    }
`
