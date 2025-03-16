import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'
const supabaseUrl = 'https://mdkwcbtttznkmkqpcjcx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ka3djYnR0dHpua21rcXBjamN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNjA3MzgsImV4cCI6MjA1NzczNjczOH0.Y8Afe9WhK5PeZC7ylUOO8i7Q1ryY12d7g1duVUTpuO0'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += 
        `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>    
            <td>${book.isbn}</td>                   
        </tr>`;
    }
}

getBooks();