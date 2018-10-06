const styles = () => ({
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
  },

  button: {
    fontSize: '10px',
    padding: '2px 4px',
    marginRight: '5px',
    minHeight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  card: {
    display: 'flex',
    height: '250px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
  content: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
  },
});

export default styles;
