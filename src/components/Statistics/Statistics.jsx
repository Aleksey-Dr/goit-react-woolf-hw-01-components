import getRandomHexColor from '../../handlers/getRandomHexColor';

import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{ title }</h2>}

            <ul className={css["stat-list"]}>
                {stats.map(({
                    id,
                    label,
                    percentage,
                }) => {
                    return (
                        <li
                            key={ id }
                            className={css.item}
                            style={{ backgroundColor: getRandomHexColor() }}
                        >
                            <span className={css.label}>{ label }</span>
                            <span className={css.percentage}>{ percentage }%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Statistics;