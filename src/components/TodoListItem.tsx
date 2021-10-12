import {
    IonButton,
    IonItem,
    IonLabel,
    IonNote,
    IonToggle
} from '@ionic/react';
import { Message } from '../data/messages';
import { Todo } from '../data/todos';
import './TodoListItem.css';

interface TodoListItemProps {
    todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    return (
        <IonItem routerLink={`/todo/${todo.id}`} detail={false}>
            <div slot="start" className={!todo.completed ? 'dot dot-unread' : 'dot'}></div>
            <IonLabel className="ion-text-wrap">
                <h2 className={!todo.completed ? 'uncompleted' : 'completed'}>
                    {todo.title }
                </h2>
            </IonLabel>
            <IonToggle color="primary" />
            <IonButton color="danger">X</IonButton>
        </IonItem>
    );
};

export default TodoListItem;
