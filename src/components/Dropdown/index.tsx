import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";

interface itemProps {
  id: number,
  label: string,
  value: number,
}

interface DropdownProps { 
  label: string,
  setTime: (t: number) => void,
}

const Dropdown = ({ label, setTime }: DropdownProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState<itemProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<itemProps>();

  useEffect(() => {
    const data:itemProps[] = [];
    for (let i = 1; i <= 24 * 2; i++) {
      const item = {
        id: Math.floor(i),
        value: i * 30,
        label: `${Math.floor(i* 30 / 60)} Hours ${Math.floor(i* 30 % 60)} Minutes`
      }
      data.push(item)
    }
    setItems(data);
  }, [])
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (item: itemProps) => {
    selectedItem == item ? {} : setSelectedItem(item);
    setOpen(false);
    setTime(item.value);
  }
  
  return (
    <View style={styles.body}>
      <Text>{label}</Text>
      <View style={styles.dropdown}>
        <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
          <Text>{selectedItem ? selectedItem.label : "Select your time"}</Text>
        </TouchableOpacity>
        {isOpen &&
          <Modal 
            visible={isOpen} 
            transparent 
            animationType="none"
            >
            <TouchableOpacity
              style={styles.overlay}
              onPressOut={() => setOpen(false)}
            >
              <ScrollView 
                style={[styles.dropdownBody]}
              >
                {items.map(item => (
                  <TouchableOpacity style={styles.dropdownItem} onPress={() => handleItemClick(item)} key={item.id}>
                    <Text style={[styles.dropdownItemDot, item == selectedItem && styles.selected]}>
                      {item == selectedItem && '• '}{item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </TouchableOpacity>
          </Modal>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    width: "100%", 
    height: "100%",
    backgroundColor: "transparent",
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  dropdown: {
    width: 200,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#FAC945',
    position: 'relative',
  },
  dropdownHeader: {
    height: 25,
    padding: 5,
    display: 'flex',
    alignItems: 'flex-start',
    boxShadow: '0 10px 25px rgba(0,0,0,.1)',
  },
  dropdownBody: {
    width: '100%',
    height: 300,
    padding: 5,
    position: 'absolute',
    backgroundColor: '#FAC945',
    top: '30%',
  },
  open: {
    display: 'flex',
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: '#E5E8EC',
    borderBottomWidth: 1,
  },
  dropdownItemDot: {
    opacity: 1,
    color: '#000000',
  },
  selected: {
    opacity: 1,
    color: '#91A5BE',
  }
});

export default Dropdown;
