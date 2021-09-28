import {Quote} from './Quote';

export const SwiperQuote = (props) => {
    const {data} = props;
    return (
        <Quote content={data}>

        </Quote>

    );
};