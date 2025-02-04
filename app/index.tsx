import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {Link} from "expo-router"

interface Todo{
    id: number;
    text: string;
    done: boolean;
}

const initial_todos: Todo[] = [
    {id: 1, text: "Learn React", done: true},
    {id: 2, text: "Learn React Native", done: false},
]

export default function Index() {
    const [todos, set_todos] = useState<Todo[]>(initial_todos);

    return (
        <View style={styles.container}>
            <View style={styles.todo_container}>
                <Text style={styles.todo_header}>Todo</Text>
                {
                    todos.map((todo) => (
                        <View key={todo.id} style={styles.todo_card}>
                            <Text style={styles.todo_title}>{todo.text}</Text>
                        </View>
                    ))
                }
            </View>
            <View>
                <Link asChild href="/create.tsx">
                    <TouchableOpacity style={styles.create_todo_button} activeOpacity={0.8}>
                        <Text style={styles.button_text}>Create Todo</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    todo_container: {
        marginVertical: 5,

    },

    todo_header: {
        fontSize: 24,
        fontWeight: "bold",
    },

    todo_card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,
        marginVertical: 5,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        elevation: 2
    },

    todo_title: {
        fontSize: 18,
        fontWeight: 500,
    },

    create_todo_button: {
        backgroundColor: "#000",
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 10,
        borderRadius: 30,
        alignItems: "center"
    },

    button_text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }

});
