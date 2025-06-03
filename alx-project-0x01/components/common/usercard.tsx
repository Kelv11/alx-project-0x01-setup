import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Website:</strong> {website}
        </p>

        <div className="mt-3">
          <p>
            <strong>Address:</strong>
          </p>
          <p className="ml-2">
            {address.street}, {address.suite}
          </p>
          <p className="ml-2">
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div className="mt-3">
          <p>
            <strong>Company:</strong> {company.name}
          </p>
          <p className="ml-2 italic">&quot;{company.catchPhrase}&quot;</p>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
