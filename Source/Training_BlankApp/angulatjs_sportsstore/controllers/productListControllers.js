angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productPerPageCount",3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productPerPageCount,cart) {
        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productPerPageCount;
        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        $scope.addProductToCart = function (product) {
            cart.addProduct(product.id, product.name, product.price);
        }
    });