import { RadioButtonGroup } from '@skatteetaten/frontend-components/RadioButtonGroup';

export const Quiz = () => {
    const options = [
        {
            key: 'A',
            text: 'Enkeltpersonsforetak',
        },
        {
            key: 'B',
            text: 'Aksjeselskap',
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