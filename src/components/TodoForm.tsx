import { IonButton, IonCol, IonGrid, IonInput, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import { Todo } from '../data/todos';

interface TodoFormProps {
    submitForm: (todo: Todo) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({submitForm}) => {
    const [text, setText] = useState('');

    const submit = () => {
        console.log("Submitted")
        submitForm({title: text, completed: false})
        setText('');
    }
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="9">
                    <IonInput value={text} placeholder="Enter Input" onIonChange={(e) => {setText(e.detail.value!)}}></IonInput>
                </IonCol>
                <IonCol size="3">
                    <IonButton onClick={() => submit()} disabled={text.length > 0 ? false : true}>Add</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default TodoForm
