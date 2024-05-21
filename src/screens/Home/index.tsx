import React from 'react';
import {Text, TextInput, TouchableOpacity, View, FlatList} from 'react-native';
import {styles} from './styles';
import {Participant} from '../../components/participant';

export function Home() {
  const participants = [
    'Andre',
    'Marilia',
    'Neto',
    'Pedro',
    'Jose',
    'Teo',
    'Alessandra',
    'Larissa',
  ];

  function handleParticipantAdd() {
    console.log('Você clicou no botão adcionar');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="$6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Niguém chegou no evento ainda? Adicione participantes a sua lista de
            presença.
          </Text>
        )}
      />
    </View>
  );
}
