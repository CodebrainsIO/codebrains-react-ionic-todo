import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { Todo, findAllTodos, updateTodo, deleteTodo } from '../data/todos';
import TodoListItem from '../components/TodoListItem';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);

    findAllTodos().then(res => {
      setTodos(res.data);
    })
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const handleToggleTodoStatus = (todo: Todo) => {
    todo.completed = !todo.completed;
    console.log('Updated Todo', todo);
    updateTodo(todo).then(() => {
      findAllTodos().then(res => {
        setTodos(res.data);
      });
    })
  };

  const handleTodoDelete = (todo: Todo) => {
    console.log("delete todo", todo)
    /*deleteTodo(todo.id).then(() => {
      findAllTodos().then(res => {
        setTodos(res.data);
      })
    });*/
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Codebrains Todos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Codebrains Todos
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
            {todos.map(t => <TodoListItem key={t.id} todo={t} onToggleTodo={handleToggleTodoStatus} onDeleteTodo={handleTodoDelete} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
