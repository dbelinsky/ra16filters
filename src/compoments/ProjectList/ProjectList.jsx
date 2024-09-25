/* eslint-disable react/prop-types */
export const ProjectList = (props) => {
  let key = 0;

  return (
    <div className='project-list'>
      {props.projects.map((el) => (
        <img className='project' src={el.img} key={key++} />
      ))}
    </div>
  );
};
