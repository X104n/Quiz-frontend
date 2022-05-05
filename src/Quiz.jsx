import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';
import React from 'react'
import { Button } from '@skatteetaten/frontend-components/Button';

export const Quiz = (props) => {
    const options = [
        {
            key: 'A',
            text: 'Oslo',
        },
        {
            key: 'B',
            text: 'Paris',
        },
        {
            key: 'C',
            text: 'Berlin',
        },
        {
            key: 'D',
            text: 'Madrid',
        },
    ];

    const [valgtAlternativ, setValgtAlternativ] = React.useState("");
    const [harAvgittSvar, setHarAvgittSvar] = React.useState(false);

    const fasit = props.fasit
    const svarmelding = valgtAlternativ == fasit ? 'Rikitig' : 'Feil'

    React.useEffect(() => {
        console.log("fra effekt")
    }, [])

    return (
        <div>
            <h1>Hva er hovedstaden i Tyskland</h1>
            <RadioButtonGroup
                label="Alternativer"
                options={options}
                onChange={(e, option) => {
                    setValgtAlternativ(option.text)
                    console.log(option)
                }}
                id="radio"
            />
            {/* <div>
                <Button buttonStyle="primary" mobileFullWidth>
                    Send inn svar
                    onChange={(e, option) => {
                    setValgtAlternativ(option.text)
                }}
                </Button>
            </div> */}
            <div>{harAvgittSvar && svarmelding}</div>
            <button onClick={() => setHarAvgittSvar(true)}>Avgi svar</button>
        </div>
    )
}