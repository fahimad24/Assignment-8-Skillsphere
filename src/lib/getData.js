export const getAllCourses = async () => {
    const res = await fetch('https://skillsphere-server-oyxw.onrender.com/courses');
    const data = await res.json();
    return data;
};

export const getPopularCourses = async () => {
    const res = await fetch('https://skillsphere-server-oyxw.onrender.com/courses?popular=true');
    const data = await res.json();
    return data;
};

export const getCourseById = async (id) => {
    const res = await fetch(`https://skillsphere-server-oyxw.onrender.com/courses/${id}`);
    const data = await res.json();
    return data;
};
