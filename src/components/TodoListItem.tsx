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
    onToggleTodo: (todo: Todo) => void;
    onDeleteTodo: (todo: Todo) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggleTodo, onDeleteTodo }) => {
    
    return (
        <IonItem detail={false}>
            <div slot="start" className={!todo.completed ? 'dot dot-unread' : 'dot'}></div>
            <IonLabel className="ion-text-wrap">
                <h2 className={!todo.completed ? 'uncompleted' : 'completed'}>
                    {todo.title }
                </h2>
            </IonLabel>
            <IonToggle checked={todo.completed} onIonChange={() => onToggleTodo(todo)} color="primary" />
            <IonButton color="danger" onClick={() => onDeleteTodo(todo)}>X</IonButton>
        </IonItem>
    );
};

export default TodoListItem;
