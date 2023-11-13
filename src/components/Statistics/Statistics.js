import css from './Statistics.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Statistics({ title, stats }) {
  const groupedData = {};

  // Grupowanie danych według etykiet
  stats.forEach(item => {
    if (groupedData[item.label]) {
      groupedData[item.label].percentage += item.percentage;
    } else {
      groupedData[item.label] = {
        label: item.label,
        percentage: item.percentage,
      };
    }
  });

  let titleElement = null;
  if (title) {
    titleElement = <h2 className={css.title}>{title}</h2>;
  }

  return (
    <div className={css.statistics}>
      {titleElement}
      <ul className={css['stat-list']}>
        {Object.values(groupedData).map(item => (
          <li
            className={css.item}
            key={item.label}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
