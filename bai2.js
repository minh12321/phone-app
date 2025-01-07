import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: require('./assets/check-circle.png'), // Đường dẫn tới icon
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/user-group.png'),
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/user-group.png'),
  },
  {
    id: '4',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/check-circle.png'),
  },
  {
    id: '5',
    title: 'Công việc đẫ quá hạn',
    description: 'Bạn có 17 công việc đã quáquá hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/check-circle.png'),
  },
  {
    id: '6',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/user-group.png'),
  },
  {
    id: '7',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: require('./assets/user-group.png'),
  },
];

const Notifi = () => {
    
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}><Text style={styles.headerText}>Thông báo</Text></View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    marginBottom : 5,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 35, 
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
});

export default Notifi;
