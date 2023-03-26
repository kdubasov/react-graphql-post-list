module.exports = {
    posts: [
        { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
        { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
        { id: 3, title: "Use Typescript", views: 31, user_id: 456 },
        { id: 4, title: "Data from Apple", views: 323, user_id: 456 },
        { id: 5, title: "Some text about Russia", views: 215, user_id: 456 },
        { id: 6, title: "Hello from KDubasov", views: 11, user_id: 456 },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Martin Byrd" },
        { id: 211, name: "Kirill Dubasov" },
        { id: 12, name: "Alex Sheik" },
        { id: 321, name: "Ivan Kolins" },
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2023-01-03') },
        { id: 995, post_id: 2, body: "Nam molestie pellentesque dui", date: new Date('2023-03-01') },
        { id: 935, post_id: 2, body: "Coferhakt for homeqertay", date: new Date('2023-02-11') },
        { id: 931, post_id: 2, body: "Hello im from Verginia", date: new Date('2022-11-12') },
        { id: 932, post_id: 2, body: "Nice post good luck", date: new Date('2023-03-06') },
        { id: 925, post_id: 4, body: "Nam molestie pellentesque dui", date: new Date('2023-02-12') },
        { id: 915, post_id: 5, body: "Nam molestie pellentesque dui", date: new Date('2023-01-04') },
        { id: 997, post_id: 6, body: "Nam molestie pellentesque dui", date: new Date('2023-03-02') },
        { id: 999, post_id: 6, body: "Lorem ipsum some text", date: new Date('2023-03-06') },
    ]
}