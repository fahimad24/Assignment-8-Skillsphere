export const getAllCourses = async () => {
    const res = await fetch('http://localhost:4000/courses');
    const data = await res.json();
    return data;
};

export const getPopularCourses = async () => {
    const res = await fetch('http://localhost:4000/courses?popular=true');
    const data = await res.json();
    return data;
};

export const getCourseById = async (id) => {
    const res = await fetch(`http://localhost:4000/courses/${id}`);
    const data = await res.json();
    return data;
};
