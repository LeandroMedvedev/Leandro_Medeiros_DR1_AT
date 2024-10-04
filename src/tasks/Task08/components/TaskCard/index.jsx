import { MdLocalPhone } from 'react-icons/md';
import { IoMdMail, IoMdPin } from 'react-icons/io';
import { useState } from 'react';

import {
  Card,
  Container,
  Icons,
  Info,
  ProfileImage,
  ProfileSection,
  TaskSection,
} from './styles';

function TaskCard({ employee }) {
  const [isCompleted, setIsCompleted] = useState(
    employee.tasks.map((task) => task.completed)
  );

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...isCompleted];
    updatedTasks[index] = !updatedTasks[index];
    setIsCompleted(updatedTasks);
  };

  return (
    <Container>
      <Card key={employee.id}>
        <ProfileSection>
          <ProfileImage
            src='https://via.placeholder.com/218'
            alt={employee.name}
          />
          <Info>
            <p>{employee.name}</p>
            <p>{employee.birthDate}</p>
            <p>{employee.department}</p>
            <p>{employee.position}</p>
          </Info>
          <Icons>
            <MdLocalPhone />
            <IoMdMail />
            <IoMdPin />
          </Icons>
        </ProfileSection>
        <TaskSection>
          <table>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Tarefas</th>
              </tr>
            </thead>
            <tbody>
              {employee.tasks.map((task, index) => (
                <tr key={task.taskId}>
                  <td>
                    <input
                      type='checkbox'
                      checked={isCompleted[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td>{task.taskName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TaskSection>
      </Card>
    </Container>
  );
}

export default TaskCard;
