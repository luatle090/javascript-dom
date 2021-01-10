document.getElementById("myForm").addEventListener("submit", saveBookmark);
window.addEventListener("load", fetchBookmarks);
const keyBookmarks = 'bookmarks';

function saveBookmark(e){
    e.preventDefault();

    //get variable 
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(validateForm(siteName, siteUrl)){
        
        return ;
    }
   

    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    
    //save bookmark to local storage
    if(localStorage.getItem(keyBookmarks) === null){
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Lưu như là 1 string vào localStorage
        localStorage.setItem(keyBookmarks, JSON.stringify(bookmarks));
    } else {
        //Get bookmark from localStorage
        var bookmarks = JSON.parse(localStorage.getItem(keyBookmarks));
        bookmarks.push(bookmark);

        // Re-set back to localStorage
        localStorage.setItem(keyBookmarks, JSON.stringify(bookmarks));
    }

    console.log(JSON.stringify(localStorage.getItem(keyBookmarks)));

    //clear form
    document.getElementsById('myForm').reset();

    //fetch bookmarks
    fetchBookmarks()
}

//fetch bookmarks
function fetchBookmarks(){
    if(localStorage.getItem(keyBookmarks) !== null){
        //get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem(keyBookmarks));

        var bookmarksResult = document.getElementById('bookmarksResults');
        bookmarksResult.innerHTML = '';
        for(var i =0; i < bookmarks.length; i++){
            var siteName = bookmarks[i].name;
            var siteUrl = bookmarks[i].url;

            bookmarksResult.innerHTML += '<div class="well"> '+
                                        '<h3>'+siteName+
                                        ' <a class="btn btn-default" target="_blank" href="' +siteUrl+ '">Visit</a> ' +
                                        ' <a onclick="deleteBookmark(\''+siteUrl+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                        '</h3>' +
                                        '</div>';
        }
    }
}


//delete bookmark
function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem(keyBookmarks));
    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            //remove from array
            bookmarks.splice(i, 1);
        }
    }

    localStorage.setItem(keyBookmarks, JSON.stringify(bookmarks));

    //fetch bookmarks
    fetchBookmarks();
}

function validateForm(siteName, siteUrl){
    alert('Please fill in the form');
    return true;
}