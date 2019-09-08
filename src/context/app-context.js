import React from 'react';
import { Modal } from 'antd';
import BookingForm from '../components/BookingForm';

const AppContext = React.createContext();

function AppProvider(props) {
  const [selectedTour, setSelectedTour] = React.useState();
  const [modal, setModal] = React.useState(false);

  function closeModal(e) {
    setModal(false);
  }

  const bookTour = tour => {
    setModal(true);
    setSelectedTour(tour);
  };

  return (
    <AppContext.Provider value={{ bookTour, modal, closeModal }}>
      {props.children}
      <Modal
        title="Book Free Tour"
        visible={modal}
        onCancel={closeModal}
        maskClosable={false}
        footer={false}
        destroyOnClose
      >
        <BookingForm tour={selectedTour} />
      </Modal>
    </AppContext.Provider>
  );
}

const useApp = () => React.useContext(AppContext);

export { AppProvider, useApp };
