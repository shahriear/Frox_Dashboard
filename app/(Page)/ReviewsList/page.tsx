import Filters from '../../Components/reviews/Filters';
import ReviewsTable from '../../Components/reviews/ReviewsTable';
import Pagination from '../../Components/reviews/Pagination';

const reviews = [
  {
    id: 1,
    name: 'Jerome Bell',
    email: 'sd_turner78@gmail.com',
    comment: 'Aliquet libero in sit imperdiet...',
    rating: 5,
    date: '28 Jan 2022',
  },
  {
    id: 2,
    name: 'Kristin Watson',
    email: 'maxime_money@yahoo.com',
    comment: 'Amet ultricies convallis netus...',
    rating: 5,
    date: '28 Jan 2022',
  },
  {
    id: 3,
    name: 'Ronald Richards',
    email: 'satterfield59@gmail.com',
    comment: 'Mouris cursus mauris sagittis...',
    rating: 5,
    date: '28 Jan 2022',
  },
];

export default function ReviewsPage() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Reviews List</h1>

      <Filters />

      <ReviewsTable reviews={reviews} />

      <Pagination />
    </div>
  );
}
