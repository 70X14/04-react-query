import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

async function submitAction(formData: FormData, onSubmit: (value: string) => void) {
  const value = (formData.get("query") as string)?.trim();

  if (!value) {
    toast.error('Please enter your search query.');
    return;
  }

  onSubmit(value);
}

export default function SearchBar({ onSubmit }: SearchBarProps) {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form
          className={styles.form}
          action={(formData: FormData) => submitAction(formData, onSubmit)}
        >
          <input
            className={styles.input}
            name="query"
            placeholder="Search movies..."
            autoComplete="off"
            autoFocus
          />

          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
