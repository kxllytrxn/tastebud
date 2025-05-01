import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { theme } from '../styles/theme';

export const CreatePost = ({ visible, onClose, navigation }) => {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (!permissionResult.granted) {
        alert('Permission to access media library is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleSave = () => {
    // For UI demonstration only
    console.log('Post saved', { title, caption, selectedImage });
    onClose();
  };

  const handleSaveAsDraft = () => {
    // For UI demonstration only
    console.log('Post saved as draft', { title, caption, selectedImage });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>New Post</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.formContainer}>
            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Post Title</Text>
              <Text style={styles.sectionSubtitle}>Give your meal a title</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="e.g. Salmon and Rice"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Caption</Text>
              <Text style={styles.sectionSubtitle}>Give context to this recipe or tag your friends</Text>
              <TextInput
                style={[styles.input, styles.captionInput]}
                value={caption}
                onChangeText={setCaption}
                placeholder="e.g. Made some salmon + rice for dinner :) — With @Jane Doe"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
              />
            </View>

            <View style={styles.formSection}>
              <Text style={styles.sectionTitle}>Photo</Text>
              <Text style={styles.sectionSubtitle}>Show off your creation</Text>
              
              <TouchableOpacity style={styles.imageSelector} onPress={handleSelectImage}>
                {selectedImage ? (
                  <Image source={{ uri: selectedImage }} style={styles.previewImage} />
                ) : (
                  <View style={styles.imagePlaceholder}>
                    <Ionicons name="image-outline" size={30} color="#999" />
                    <Text style={styles.dropText}>Drag photos here or</Text>
                    <TouchableOpacity style={styles.selectButton}>
                      <Text style={styles.selectButtonText}>Select from computer</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.draftButton} onPress={handleSaveAsDraft}>
              <Text style={styles.draftButtonText}>Save as draft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
  },
  formContainer: {
    padding: 15,
  },
  formSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8C38',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    fontSize: 14,
  },
  captionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  imageSelector: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dropText: {
    color: '#666',
    marginVertical: 5,
  },
  selectButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  draftButton: {
    borderWidth: 1,
    borderColor: '#FF8C38',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  draftButtonText: {
    color: '#FF8C38',
  },
  saveButton: {
    backgroundColor: '#FF8C38',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 