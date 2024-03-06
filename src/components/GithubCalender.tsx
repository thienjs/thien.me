import dynamic from 'next/dynamic'

const GitHubCalendar = dynamic(() => import('react-github-calendar'))
const selectLastHalfYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};
const GithubCalendar = () => {
  return (
    <>
      <div className=''>
        <GitHubCalendar
          username="thienjs"
          transformData={selectLastHalfYear} 
          colorScheme="dark"
          labels={{
            totalCount: '{{count}} contributions lately',
          }}
        />
      </div>
    </>
  )
}

export default GithubCalendar
