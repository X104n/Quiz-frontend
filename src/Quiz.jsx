import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

export const Quiz = () => {
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
    return (
        <div>
            <h1>Hva er hovedstaden i Tyskland</h1>
            <RadioButtonGroup
                label="Type virksomhet"
                options={options}
                onChange={(e, option) => console.log(option)}
                id="radio"
            />
        </div>
    )
}